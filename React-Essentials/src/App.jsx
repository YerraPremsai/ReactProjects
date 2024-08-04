import { useState } from 'react';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import { CORE_CONCEPTS } from './data.js';
import TapButton from './components/TapButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a Topic</p>
  if (selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>)

  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title}{...conceptItem} />))}

            {/* or */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
           /// we can use both above or below code///------> comment inside comment
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>

            <TapButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TapButton>

            <TapButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>Jsx</TapButton>
            <TapButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TapButton>
            <TapButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TapButton>
          </menu>
          {/* {!selectedTopic ? (<p>Please select a Topic</p>) : null}
          {selectedTopic ? (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>) : null} */}

          {/* or */}

          {/* {!selectedTopic ? (<p>Please select a Topic</p>) : (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>)} */}


          {/* alternate is keeping AND(&&) operator  ,it is easy to understand and read */}

          {/* {!selectedTopic && (<p>Please select a Topic</p>)}
          {selectedTopic && (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>)} */}
          {/* or we can use another alternate is by using conditional loop ex:(if=else) it's code is above name is tabContent */}

          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
