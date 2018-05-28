// import Lift from './lift';

class Lifts extends React.Component {
  constructor(props) {
    super(props);

    state = {
      lifts: props.data
    };
  }

  // getInitialState() {
  //   return {
  //     lifts: this.props.data
  //   };
  // }

  render() {
    let lifts = this.props.data;
    return (
      <div className="lifts">
        <h1 className="title"> Lifts </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th> Date </th>
              <th> Lift Name </th>
              <th> Weight Lifted </th>
              <th> Reps Performed </th>
              <th> 1 RM </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> {this.props.data[0].date} </th>
              <th> {this.props.data[0].liftname} </th>
              <th> {this.props.data[0].weightlifted} </th>
              <th> {this.props.data[0].repsperformed} </th>
              <th> {this.props.data[0].onerm} </th>

              {/* {lifts[0].map(lift => {
                return <th key={lift.id}>{lift}</th>;
              })} */}

              {/* {this.props.data.map(function(lift) {
                return React.createElement('th', { key: lift.id }, lift);
              })} */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Lifts.defaultProps = {
  lifts: []
};

// {
//   Array.from(this.state.lifts).map(function(lift) {
//     return React.createElement(Lift, { key: lift.id, lift: lift });
//   });
// }

// {this.state.lifts.map(lift => {
//   return <th key={lift.id}> {lift} </th>;
// })}

// Array.from(this.state.lifts).map(function(lift) {
//   return React.createElement(Lift, { key: lift.id, lift: lift });
// })
