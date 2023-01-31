import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const onAddMeetup = (formData) => {
    console.log(formData);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>;
}
