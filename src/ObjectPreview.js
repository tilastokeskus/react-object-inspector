import React, { Component } from 'react';

import ObjectDescription from './ObjectDescription';

function intersperse(arr, sep){
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function(xs, x, i) {
      return xs.concat([sep, x]);
  }, [arr[0]]);
}

/**
 * A preview of the object on root level node
 */
export default class ObjectPreview extends Component {
  propTypes: {
    maxProperties: PropTypes.number, // maximum properties displayed in preview
    renderDescription: PropTypes.func.isRequired,
    renderName: PropTypes.func.isRequired
  }

  static defaultProps = {
    maxProperties: 5
  }

  render() {
    const object = this.props.object;
    const renderDescription = this.props.renderDescription;
    const renderName = this.props.renderName;
    if (typeof object !== 'object' || object === null) {
      return (<ObjectDescription object={object}
                                 renderDescription={renderDescription} />);
    }

    if (Array.isArray(object)) {
      return <span>[
        {intersperse(object.map(function(element, index){
          return (<ObjectDescription key={index}
                                     object={element}
                                     renderDescription={renderDescription} />)
        }), ", ")}
      ]</span>;
    }
    else if (object instanceof Date) {
      return <span>{object.toString()}</span>;
    }
    else {
      let propertyNodes = [];
      for(let propertyName in object){
        const propertyValue = object[propertyName];
        if(object.hasOwnProperty(propertyName)){
          let ellipsis;
          if (propertyNodes.length === (this.props.maxProperties - 1)
              && Object.keys(object).length > this.props.maxProperties) {
            ellipsis = (<span key={'ellipsis'}>…</span>);
          }
          const valueParts = propertyValue.split('\n');
          const value = valueParts[0] + (valueParts.length > 1 ? ' ...' : '');
          propertyNodes.push(
            <span key={propertyName}>
              {renderName(propertyName)}
              :&nbsp;
              <ObjectDescription object={value}
                                 renderDescription={renderDescription} />
              {ellipsis}
            </span>
          );
          if(ellipsis)
            break;
        }
      }

      return (<span>
                  {'Object {'}
                  {intersperse(propertyNodes, ", ")}
                  {'}'}
              </span>);
    }
  }
}
