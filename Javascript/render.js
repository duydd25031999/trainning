let renderTable = null;

$(document).ready(function() {
    dataTable = $('#table_id').DataTable();

    renderTable = function(array) {
        dataTable.clear();

        array.forEach((item) => {
            dataTable.row.add([
                item.id,
                item.title,
            ]).draw(false);
        })
    }
});