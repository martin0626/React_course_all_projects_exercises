import MeetupList from "@/components/meetups/MeetupList";

let DUMMY_MEETUPS = [
  {
    id: "m1",
    titlte: "Meetup 1",
    address: "St George Street",
    image:
      "https://th.bing.com/th/id/R.adaf1f45525a68b5de0b939edd6a620c?rik=70DkUQ4MyoQW4A&pid=ImgRaw&r=0",
    description: "Test Meetup Item",
  },
  {
    id: "m2",
    titlte: "Meetup 2",
    address: "St George Street",
    image:
      "https://th.bing.com/th/id/R.adaf1f45525a68b5de0b939edd6a620c?rik=70DkUQ4MyoQW4A&pid=ImgRaw&r=0",
    description: "Test Meetup Item",
  },
  {
    id: "m3",
    titlte: "Meetup 3",
    address: "St George Street",
    image:
      "https://th.bing.com/th/id/R.adaf1f45525a68b5de0b939edd6a620c?rik=70DkUQ4MyoQW4A&pid=ImgRaw&r=0",
    description: "Test Meetup Item",
  },
];

export default function Home(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export function getStaticProps() {
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 1,
  };
}
