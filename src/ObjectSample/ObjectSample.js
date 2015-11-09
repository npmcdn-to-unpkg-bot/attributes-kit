import React from 'react';

import Row from 'Row/Row'
import Column from 'Column/Column'
import Sample from 'Sample/Sample'
import SampleToggle from 'SampleToggle/SampleToggle'


class ObjectSample extends React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  handleExpandCollapse = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  renderStyles() {
    let styles = {
      header: {
        borderTop: '1px solid #E8EBEE',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
      }
    };

    styles.header.borderBottom = '1px solid #E8EBEE';

    return styles;
  }

  renderSample() {
    if (!this.state.isExpanded) {
      return false;
    }
    let element = {
      element: 'object',
      content: this.props.samples
    };

    return (
      <Row>
        <Sample
          parentElement={this.props.element}
          element={element}
          showArrayHeader={false}
        />
      </Row>
    );
  }

  render() {
    const styles = this.renderStyles();

    return (
      <Row>
        <Column>
          <Row
            style={styles.header}
            onClick={this.handleExpandCollapse}
          >
            <SampleToggle
              isExpanded={this.state.isExpanded}
              onClick={this.handleExpandCollapse}
            />
          </Row>

          {this.renderSample()}
        </Column>
      </Row>
    );
  }
}

export default ObjectSample;
