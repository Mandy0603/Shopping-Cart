import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateFilters } from "../../../services/filters/actions";
import Checkbox from "../../Checkbox";
import GithubStarButton from "../../github/StarButton";

import "./style.scss";

const availableSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

class Filter extends React.Component {
  static propTypes = {
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.array
  };
  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }
  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  };
  createCheckBox = label => {
    return (
      <Checkbox
        className="filters-available-size"
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
      />
    );
  };
  createCheckBoxes = () => availableSizes.map(this.createCheckBox);
  render() {
    return (
      <div className="filters">
        <h4 className="title">Sizes:</h4>
        {this.createCheckBoxes()}
        <GithubStarButton />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { filters: state.filters.items };
};

export default connect(
  mapStateToProps,
  { updateFilters }
)(Filter);
