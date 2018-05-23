class Lift extends React.Component {
  render() {
    return (
      <tr>
        <th> {lift.date} </th>
        <th> {lift.liftname} </th>
        <th> {lift.weightlifted} </th>
        <th> {lift.resperformed} </th>
        <th> {lift.onerm} </th>
      </tr>
    );
  }
}
export default Lift;
