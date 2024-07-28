import WaitlistCard from "~/components/common/WaitListForm/WaitlistCard";

const WaitlistPage = () => {
  return (
    <WaitlistCard
      cardTitle={"Easy Customization"}
      cardDescription={
        "Tailor your experience to your specific needs and preferences for maximum results"
      }
      cardIcon={"~/public/Waitlist/vector-icon.svg"}
    />
  );
};

export default WaitlistPage;
