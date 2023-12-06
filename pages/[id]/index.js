import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

export default function MeetupPage(props) {
    return <Fragment>
        <h3>{props.title}</h3>
        <img height={100} hsrc={props.image}></img>
        <p>{props.address}</p>
        <p>{props.description}</p>
    </Fragment>;
}

export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://luidimso:El_Loco-13@cluster0.okownu3.mongodb.net/?retryWrites=true&w=majority");

    const db = client.db();

    const collection = db.collection("meetups");

    const meettups = await collection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        paths: meettups.map((meetup => ({
            params: {
                id: meetup._id.toString()
            }
        }))),
        fallback: false
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;

    const client = await MongoClient.connect("mongodb+srv://luidimso:El_Loco-13@cluster0.okownu3.mongodb.net/?retryWrites=true&w=majority");

    const db = client.db();

    const collection = db.collection("meetups");

    const selectedMeetup = await collection.findOne({_id: new ObjectId(id)});

    console.log(selectedMeetup)

    client.close();

    return {
        props: {
            _id: selectedMeetup._id.toString(),
            title: selectedMeetup.title,
            address: selectedMeetup.address,
            description: selectedMeetup.description
        }
    };
}