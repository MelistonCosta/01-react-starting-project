import { useState } from "react";
import TabButton from "../TabButton/TabButton"
import { EXAMPLES } from "../../data"

export default function TabExamples() {
    
    const [ selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedTab) {
        // console.log("Tab selected:", selectedTab);
        // tabContent = selectedTab;
        setSelectedTopic(selectedTab);
        // console.log(selectedTopic);
    }
    
    return(
        <section id="examples">
            <h2>Tab Buttons</h2>
            <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
            <div id="tab-content">
                { !selectedTopic ? (
                        <h3>Please select a topic</h3>
                    ) : (
                        <div>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre> 
                        </div>
                    )
                }
            </div>
        </section>
    )
}