import Meetupitems from "./Meetupitems";
import classes from "./Meetuplist.module.css";

function Meetuplist(props) {
  return (
    <ul className={classes.list}>
      {props.mymeetups.map((meetup) => (
        <Meetupitems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default Meetuplist;
