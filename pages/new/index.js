import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewPage() {
    const router = useRouter();

    async function onAddMeetup(meetupData) {
        const request = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-type": "application/json"
            }
        });

        const data = await request.json();

        console.log(data);

        router.replace("/");
    }

    return <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>;
}