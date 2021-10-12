import { useEffect } from "react";

export const Tablr = ({
  rows,
  headers,
  borderWidth = 'medium',
  cellPadding = 'medium',
  cellTextColor = 'black',
  headerTextColor = 'white',
  cellBorderColor = '#747381',
  headerBorderColor = '#494866',
  backgroundColor = '#a6a5b8',
  headerBackgroundColor = '#65647a',
}) => {
  // handle errors with props
  useEffect(() => {
    if (headers.length < 1) {
      throw Error('Must have at least one header');
    } else if (!rows.every(r => r.length === headers.length)) {
      throw Error('Row length must equal header length');
    }
  }, [rows, headers]);

  const cellPaddingMap = {
    small: '4px',
    medium: '8px',
    large: '16px',
  };

  const borderWidthMap = {
    thin: '1px',
    medium: '2px',
    thick: '3px',
  };

  return (<>TABLR</>)
}