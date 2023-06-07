import AccordionItem from "./AccordionItem"


const Accordion = () => {
  return (
    <div>
    <AccordionItem
      title="Accordion Item 1"
      content="Content for Accordion Item 1"
    />
    <AccordionItem
      title="Accordion Item 2"
      content="Content for Accordion Item 2"
    />
    {/* Add more AccordionItem components for additional items */}
  </div>
  )
}

export default Accordion
