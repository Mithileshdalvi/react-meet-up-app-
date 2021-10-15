import Card from "../UI/card";
import classes from "./NewMeetupsForms.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="Image">Meetup Image</label>
          <input type="url" required id="Image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetups</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
