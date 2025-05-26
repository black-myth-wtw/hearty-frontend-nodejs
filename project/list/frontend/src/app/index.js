const {useState} = require('react');

const {List} = require('../../../component/build/component_index');

const App = () => {
    const [columns, setColumns] = useState(window.initial_list_data.columns);
    const [sort, setSort] = useState(window.initial_list_sort);
    const [filter, setFilter] = useState(window.initial_list_filter);

    return <List
        columns={columns}
        sort={current_sort => {
            setSort(current_sort);
            fetch(`/api?sort=${current_sort}&filter=${filter}`).then(response => response.json()).then(({columns}) => {
                setColumns(columns);
            }).catch(error => console.error(error));
        }}
        filter={current_filter => {
            setFilter(current_filter);
            fetch(`/api?sort=${sort}&filter=${current_filter}`).then(response => response.json()).then(({columns}) => {
                setColumns(columns);
            }).catch(error => console.error(error));
        }}
    />
};

module.exports = App;
