import React, { Component } from 'react';

/**
 * A short description of the object
 */
export default class ObjectDescription extends Component{
  propTypes: {
    renderDescription: PropTypes.func
  }

  static defaultProps = {
    renderDescription: (data, dataType, defaultContent) => (
      <span className={`object-inspector-${dataType}`}>{defaultContent}</span>
    )
  }

  render() {
    const object = this.props.object;
    const renderDescription = this.props.renderDescription;
    switch (typeof object){
      case 'number':
        return renderDescription(object, 'number', object);
      case 'string':
        return renderDescription(object, 'string', `"${object}"`);
      case 'boolean':
        return renderDescription(object, 'boolean', String(object));
      case 'undefined':
        return renderDescription(object, 'undefined', 'undefined');
      case 'object':
        if(object === null){
          return renderDescription(object, 'null', 'null');
        }
        if(object instanceof Date){
          return renderDescription(object, 'date', object.toString());
        }
        if(Array.isArray(object)){
          return renderDescription(object, 'array', `Array[${object.length}]`);
        }
        return renderDescription(object, 'object', 'Object');
      case 'function':
        return renderDescription(object, 'function', `function ${object.name}()`);
      case 'symbol':
        return renderDescription(object, 'symbol', 'Symbol()');
      default:
        return renderDescription(object, 'unknown', '');
    }
  }
}
