import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewPage() {
    function onAddMeetup(meetupData) {
        console.log(meetupData);
    }

    return <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>;
}