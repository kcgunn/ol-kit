import styled from 'styled-components'

export const FlexMap = styled.div`
  display: flex;
  width: ${p => {
    const adjustedColumns = p.numberOfColumns - (p.total % 2)
    const breakPoint = p.index < adjustedColumns
    const needsAdjustment = !!(p.total % 2) && breakPoint

    return needsAdjustment ? `${100 / adjustedColumns}%` : `${100 / p.numberOfColumns}%`
  }};
  height: ${p => `${100 / p.numberOfRows}%`};
  flex-grow: ${p => !p.index && (p.total % 2) ? '2' : '1'};
  flex-shrink: ${p => !p.index && (p.total % 2) ? '1' : '2'};
  position: relative;
`

export const FullScreenFlex = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  display: flex;
`
