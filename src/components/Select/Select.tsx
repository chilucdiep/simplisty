import { useEffect, useRef, useState } from "react";
import { SelectOption } from "./types/Select.interface";
import styled from "styled-components";
import styles from "./Select.module.scss";
import { Button } from "../Button";

type SelectPropsBase = {
  maxWidth?: string;
  options: SelectOption[];
}

interface SingleSelectProps extends SelectPropsBase {
  multiple?: false;
  selectedOption?: SelectOption;
  onChange: (selectedOption?: SelectOption) => void;
};

interface MultipleSelectProps extends SelectPropsBase {
  multiple: true;
  selectedOption: SelectOption[];
  onChange: (selectedOption: SelectOption[]) => void;
};

type SelectProps = SingleSelectProps | MultipleSelectProps;

export function Select({
  maxWidth,
  multiple,
  onChange,
  options,
  selectedOption,
}: SelectProps) {
  const Select = styled.div`
    max-width: ${maxWidth};
  `;

  const [isOpen, setisOpen] = useState(false);
  const [highlightedIndex, sethighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      sethighlightedIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {    
    function handler(e: KeyboardEvent) {
      if (e.target !== containerRef.current) return;

      switch (e.code) {
        case "Enter":
        case "Space":
          setisOpen((prev) => !prev);

          if (isOpen) {
            selectOption(options[highlightedIndex]);
          }
          break;

        case "ArrowUp":
        case "ArrowDown":
          if (!isOpen) {
            setisOpen(true);
            break;
          }

          const newHighlightedIndex =
            highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          const isIndexWithinOptions =
            newHighlightedIndex >= 0 && newHighlightedIndex < options.length;
          if (isIndexWithinOptions) {
            sethighlightedIndex(newHighlightedIndex);
          }
          break;
      }
    }
    
    containerRef.current?.addEventListener("keydown", handler);
    containerRef.current?.focus();

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options, containerRef.current, selectedOption]);

  const multipleValueMarkup = Array.isArray(selectedOption)
    ? selectedOption.map((option: SelectOption) => (
        <span className={styles.ButtonContainer}>
          <Button
            label={`${option.label} \u00D7`}
            key={option.value}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
            }}
          />
        </span>
      ))
    : null;

  const valueMarkup = (
    <span className={styles.Value}>
      {multiple ? multipleValueMarkup : selectedOption?.label}
    </span>
  );

  const clearButtonMarkup = (
    <Button
      label="&times;"
      onClick={(e) => {
        handleClearValue(e);
      }}
    />
  );

  const optionsMarkup = options.map((option, index) => (
    <li
      key={option.value}
      className={`
        ${styles.Option}
        ${isOptionSelected(option) ? styles.Selected : ""}
        ${index === highlightedIndex ? styles.Highlighted : ""}
      `}
      onClick={() => {
        selectOption(option);
      }}
      onMouseEnter={() => sethighlightedIndex(index)}
    >
      {option.label}
    </li>
  ));

  return (
    <Select
      className={styles.Container}
      onBlur={() => setisOpen(false)}
      onClick={() => setisOpen((prev) => !prev)}
      ref={containerRef}
      tabIndex={0}
    >
      {valueMarkup}
      {clearButtonMarkup}
      <span className={styles.Divider}></span>
      <span className={styles.Caret}></span>
      <ul
        className={`${styles.OptionsList} ${isOpen ? styles.ShowOptions : ""}`}
      >
        {optionsMarkup}
      </ul>
    </Select>
  );

  function handleClearValue(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    if (multiple) {
      onChange([]);
    } else {
      onChange(undefined);
    }
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (selectedOption?.includes(option)) {
        onChange(selectedOption.filter((o) => o !== option));
      } else {
        onChange([...selectedOption, option]);
      }
    } else {
      if (option !== selectedOption) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple
      ? selectedOption?.includes(option)
      : option === selectedOption;
  }
}
