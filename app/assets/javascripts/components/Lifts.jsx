// import Lift from './lift';

class Lifts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lifts: props.data
    };

    Lifts.defaultProps = {
      lifts: []
    };
  }

  // getInitialState = () => {
  //   lifts: this.props.data;
  // };
  // getDefaultProps = () => {
  //   lifts: [];
  // };

  render() {
    return (
      <div className="lifts">
        <h1 className="title"> Lifts </h1>
        <table className="table table-bordered">
          <thead>
            <tr />
            <th> Date </th>
            <th> Lift Name </th>
            <th> Weight Lifted </th>
            <th> Reps Performed </th>
            <th> 1 RM </th>
          </thead>
          {/* <tbody>
            {lift.map(lift => {
              return <li key={lift.id}> {lift} </li>;
            })}
          </tbody> */}
        </table>
      </div>
    );
  }
}

// Array.from(this.state.lifts).map(function(lift) {
//   return React.createElement(Lift, { key: lift.id, lift: lift });
// })
