import "./App.css";

import withConditionalCard from "./withConditionalCard";
import SimpleCard from "./SimpleCard";

const ConditionalSimpleCard = withConditionalCard(SimpleCard);

const App = () => (
  <>
    <ConditionalSimpleCard
      title="Active Card"
      content="This card is active."
      disabled={true}
    />

    <ConditionalSimpleCard
      title="Disabled Card"
      content="This card is disabled."
      disabled={false}
    />
  </>
);

export default App;
