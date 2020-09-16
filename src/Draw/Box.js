import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tooltip, IconButton } from './styled'
import olDrawInteraction from 'ol/interaction/draw'
import CropSquareSharpIcon from '@material-ui/icons/CropSquareSharp'

const BOX_CONFIG = {
  type: 'Circle',
  geometryFunction: olDrawInteraction.createBox()
}

/**
 * A button for drawing boxes.
 * @component
 * @category Draw
 * @since 0.18.0
 */
class Box extends Component {
  isBoxDraw = () => {
    const { type, geometryFunction } = this.props

    return type === 'Circle' && typeof geometryFunction === 'function' && geometryFunction.toString() === BOX_CONFIG.geometryFunction.toString()
  }

  render () {
    const { addInteraction, tooltipTitle } = this.props

    return (
      <Tooltip title={tooltipTitle}>
        <IconButton
          data-testid='Draw.box'
          size='small'
          onClick={() => addInteraction(BOX_CONFIG)}>
          <CropSquareSharpIcon size={1} htmlColor={this.isBoxDraw() ? '#1976D2' : '#656565'} />
        </IconButton>
      </Tooltip>
    )
  }
}

Box.propTypes = {
  /** the openlayers draw type */
  type: PropTypes.string,

  /** A function that creates a openlayers draw interaction box */
  geometryFunction: PropTypes.func,

  /** a function that adds the draw interaction to the openlayers map on click of the button */
  addInteraction: PropTypes.func,

  /** a title for the tooltip */
  tooltipTitle: PropTypes.string
}

export default Box
