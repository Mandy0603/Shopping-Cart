import React from "react";
import PropTypes from "prop-types";

class Checkbox extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired
  };
  state = { isChecked: false };
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;
    this.setState(isChecked => ({ isChecked: !isChecked }));
    // this.setState({ isChecked: !this.state.isChecked });
    handleCheckboxChange(label);
  };
  render() {
    const { label, className } = this.props;
    const { isChecked } = this.state;
    return (
      <div className={className}>
        <label>
          <input
            type="checkbox"
            value="label"
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <span className="checkmark">{label}</span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
