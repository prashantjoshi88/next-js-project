import { Table } from 'antd';
// import './table.css'
export default function TableComponent(props) {
  return (
    <>
      {props.title && <h1 className="username"> {props.title} </h1>}
      <div className="table_comp"></div>
      <Table
        columns={props.columns}
        dataSource={props.data}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />
    </>
  );
}
