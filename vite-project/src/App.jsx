import { useState } from 'react';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { SECTIONS } from './data';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Section, Main, Menu, Root, RowContainer } from './App-styles';

const handleDropdownSelect = (item) => {
  const urls = {
    LinkedIn: "https://www.linkedin.com/in/matea-rajkovska/",
    GitHub: "https://github.com/RajkovskaMatea"
  };
  window.open(urls[item], "_blank");
};

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p></p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{SECTIONS[selectedTopic].title}</h3>
        {selectedTopic === "courses" ? (
          <ul>
            {SECTIONS.courses.description.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        ) : selectedTopic === "experience" ? (
          <ul>
            {SECTIONS.experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{SECTIONS[selectedTopic].description}</p>
        )}
      </div>
    );
  }

  return (
    <Root>
      <Header />
      <RowContainer>
        <Dropdown
          buttonText="Select Profile"
          items={["LinkedIn", "GitHub"]}
          onItemClick={handleDropdownSelect}
        />
        <Main>
          <Section>
            <Menu>
              <TabButton
                isSelected={selectedTopic === 'experience'}
                onSelect={() => handleSelect('experience')}
              >Professional Experience
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'education'}
                onSelect={() => handleSelect('education')}
              >Education
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'courses'}
                onSelect={() => handleSelect('courses')}
              >Courses
              </TabButton>
            </Menu>
            {tabContent}
          </Section>
        </Main>
      </RowContainer>
    </Root>
  );
}

export default App
