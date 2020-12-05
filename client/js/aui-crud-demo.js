new Vue({
    el: '#crud',
    data: {
        options: {
            package: 'aui-crud-demo',
            list_api_read: 'crud:list.read',
            form_api_read: 'crud:form.read',
            form_api_create: 'crud:form.create',
            form_api_update: 'crud:form.update',
            form_api_delete: 'crud:form.delete',
            form_storable_key: 'storable_id',
            list_type: 'table',
            list_table_columns: {
                storable_id: {
                    label: 'Storable ID',
                    format: value => {
                        return value;
                    },
                    hide_on_ipad: true
                },
                title: 'Name',
                subtext: {
                    label: 'Description',
                    format: value => {
                        return value;
                    },
                    hide_on_mobile: true
                }
            },
            views: {
                form: 'Form',
                test: {
                    name: 'Test Page',
                    show_action_bar: false
                }
            }
        },
        form: {
            storable_id: null,
            name: null,
            description: null
        },
        feedback: {
            name: null,
            description: null
        },
        calling: false
    }
});