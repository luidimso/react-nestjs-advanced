import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "1",
        title: "The first",
        image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg",
        address: "Rua do Teste",
        description: "Test 1"
    },
    {
        id: "2",
        title: "The second",
        image: "https://2.bp.blogspot.com/-5l05v-QNv-w/UVd-HrwdVdI/AAAAAAAAByI/u4KBuk7zzpE/s640/O+Ano+do+Luigi.jpg",
        address: "Rua do Teste",
        description: "Test 2"
    },
    {
        id: "2",
        title: "The third",
        image: "https://jogoveio.com.br/wp-content/uploads/2022/10/thumb-peach-marioparty.jpg",
        address: "Rua do Teste",
        description: "Test 3"
    }
];

export default function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}