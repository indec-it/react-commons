const table = {
    variants: {
        reg: {
            fontSize: '16px',
            height: '35px',
            table: {
                background: 'brand.white',
                borderRadius: '0 0 10px 10px'
            },
            thead: {
                color: 'brand.primary'
            },
            th: {
                fontSize: '11px'
            },
            td: {
                fontSize: '14px'
            },
            tbody: {
                color: 'brand.black',
                height: '128px'
            },
            caption: {
                background: 'brand.neutral100',
                borderRadius: '10px 10px 0 0',
                fontSize: '16px',
                color: 'brand.primary',
                fontWeight: 800,
                textAlign: 'left',
                padding: '10px 20px'
            }
        },
        fixedFirstColumn: {
            fontSize: '16px',
            height: '35px',
            table: {
                background: 'white',
                borderRadius: '0 0 10px 10px'
            },
            tr: {
                '& th:first-of-type': {
                    position: 'sticky',
                    left: '0',
                    backgroundColor: 'white'
                },
                '&:nth-of-type(even) td:first-of-type ': {
                    backgroundColor: 'brand.neutral50'
                },
                '&:nth-of-type(odd) td:first-of-type ': {
                    backgroundColor: 'white'
                }
            },

            td: {
                '&:first-of-type': {
                    position: 'sticky',
                    left: '0'
                }
            }
        }
    }
};

export default table;
