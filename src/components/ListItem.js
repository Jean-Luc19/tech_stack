import React, { Component } from 'react';
import { Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection } from './common';


class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library } = this.props;
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={styles.textStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  textStyle: {
    flex: 1,
    paddingLeft: 15,
    fontStyle: 'italic'
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selection === ownProps.library.id;
  return {
    expanded
  };
};
export default connect(mapStateToProps, actions)(ListItem);
