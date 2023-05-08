            let sum = 0;
            let personCount = 0;
            const values = [];
          
            function addPerson() {
              const nameInput = document.getElementById('person-name');
              const valueInput = document.getElementById('person-value');
          
              const name = nameInput.value;
              let value = Number(valueInput.value);
          
              if (name) {
                const personList = document.getElementById('person-list');
                const listItem = document.createElement('li');
          
                const nameSpan = document.createElement('span');
                nameSpan.id = `person-name-${personCount}`;
                nameSpan.textContent = name;
                listItem.appendChild(nameSpan);
          
                const valueSpan = document.createElement('span');
                valueSpan.id = `person-value-${personCount}`;
                valueSpan.textContent = value;
                listItem.appendChild(valueSpan);
          
                personList.appendChild(listItem);
          
                sum += value;
                personCount++;
                values.push(value);
          
                document.getElementById('sum').textContent = sum;
          
                nameInput.value = '';
                valueInput.value = '';
          
                updateDifferences();
              }
            }
          
            function updateDifferences() {
                const differencesList = document.getElementById('differences');
                differencesList.innerHTML = '';

                const sortedValues = [...values].sort((a, b) => a - b);

                for (let i = 0; i < personCount; i++) {
                  const minValueIndex = values.indexOf(sortedValues[i]);
                  const maxValueIndex = values.indexOf(sortedValues[personCount - 1]);

                  if (minValueIndex !== maxValueIndex) {
                    const personAElement = document.getElementById(`person-name-${minValueIndex}`);
                    const personBElement = document.getElementById(`person-name-${maxValueIndex}`);

                    if (personAElement && personBElement) {
                      const personA = personAElement.textContent;
                      const personB = personBElement.textContent;
                      const difference = sortedValues[i] / personCount - sortedValues[personCount - 1] / personCount;

                      const message = `${personA} musi oddać ${Math.abs(difference).toFixed(2)} zł ${personB}`;

                      const listItem = document.createElement('li');
                      listItem.textContent = message;
                      differencesList.appendChild(listItem);
                    }
                  }
                }
              }