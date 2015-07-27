import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRDataTable',
  blockClassName: 'mdl-data-table mdl-js-data-table',
  modifiers: [
    {
      prop: 'selectable',
      type: React.PropTypes.bool,
      className: 'mdl-data-table--selectable'
    }
  ]
})
class DataTable extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default DataTable;
