const baseStyles = {
    fontSize: '16px',
    height: '35px',
    table: {
        background: 'brand.white',
        borderRadius: '0 0 10px 10px'
    }
};

const stickyTable = {
    position: 'sticky',
    left: '0'
};

const table = {
    variants: {
        reg: {
            ...baseStyles,
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
            ...baseStyles,
            tr: {
                '& th:first-of-type': {
                    ...stickyTable,
                    backgroundColor: 'brand.white'
                },
                '&:nth-of-type(even) td:first-of-type ': {
                    backgroundColor: 'brand.neutral50'
                },
                '&:nth-of-type(odd) td:first-of-type ': {
                    backgroundColor: 'brand.white'
                }
            },

            td: {
                '&:first-of-type': {
                    ...stickyTable
                }
            }
        }
    }
};

export default table;
