const FSearchBox = {
    init(options) {
        const { targetEleId, width, height } = options;
        const targetElement = document.getElementById(targetEleId);
        if(!targetElement){
            alert('Invalid target Element for fsearchbox. Please check in init'); return;
        }
        const originalContent = targetElement.innerHTML;

        const container = document.createElement('div');
        container.id = `fsearchBoxContainer-${targetEleId}`;
        if (width) container.style.width = `${width}`;
        if (height) container.style.height = `${height}`;

        const searchBox = document.createElement('input');
        searchBox.type = 'text';
        searchBox.id = `fsearchBox-${targetEleId}`;
        searchBox.placeholder = 'Search...';

        const contentContainer = document.createElement('div');
        contentContainer.id = `fcontentContainer-${targetEleId}`;
        contentContainer.innerHTML = originalContent;

        container.append(searchBox, contentContainer);
        targetElement.innerHTML = '';
        targetElement.appendChild(container);

        searchBox.addEventListener('keyup', () => FSearchBox.searchText(targetEleId));
    },

    searchText(targetEleId) {
        const searchTerm = document.getElementById(`fsearchBox-${targetEleId}`).value.toLowerCase();
        const textArea = document.getElementById(`fcontentContainer-${targetEleId}`);
        let text = textArea.innerText.replace(/<mark class="highlight">|<\/mark>/g, '');

        if (searchTerm) {
            const regex = new RegExp(searchTerm, 'gi');
            text = text.replace(regex, (match) => `<mark class="highlight">${match}</mark>`);
        }

        textArea.innerHTML = text;
    }
};


