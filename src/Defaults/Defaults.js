import React from 'react';

import SimpleValue from 'SimpleValue/SimpleValue';

class Defaults extends React.Component {
  static propTypes = {
    data: React.PropTypes.array,
  }

  renderDefaultEntries() {
    const data = this.props.data;
    if (Array.isArray(data)) {
      return data.map((entry, index) => {
        return (
          <SimpleValue key={index} data={entry} />
        );
      });
    }

    return data;
  }

  render() {
    return (
      <div className="attributeDefaults">
        <div className="attributeDefaultsEntries">
          {this.renderDefaultEntries()}
        </div>
      </div>
    );
  }
}

export default Defaults;