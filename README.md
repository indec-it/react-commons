# react-commons 🚀

A comprehensive React component library built with Tailwind CSS for INDEC (Instituto Nacional de Estadística y Censos) applications.

https://indec-it.github.io/react-commons/

## Table of Contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
3. [Components](#components)
4. [Icons](#icons)
5. [Hooks](#hooks)
6. [Utilities](#utilities)
7. [Development](#development)
8. [Contributing](#contributing)

## Installation

```bash
npm install @indec/react-commons
```

## Getting Started

Import the components you need from the library:

```javascript
import { Button, Field, Modal, Header } from '@indec/react-commons';
```

## Components

### Button
A customizable button component with various styles and states.

```javascript
import { Button } from '@indec/react-commons';

<Button onClick={handleClick} disabled={false}>
  Click me
</Button>
```

### Field
An input field component with label, error handling, and tooltip support.

```javascript
import { Field } from '@indec/react-commons';

<Field
  name="email"
  label="Email Address"
  type="email"
  placeholder="john@example.com"
  error="Invalid email"
  tooltip="Enter your work email"
  onChange={handleChange}
  onBlur={handleBlur}
/>
```

Props:
- `name` - Field name attribute
- `label` - Field label
- `type` - Input type (text, email, password, number, etc.)
- `error` - Error message to display
- `tooltip` - Tooltip text (shows info icon)
- `disabled` - Disable the field
- `onChange` - Change handler
- `onBlur` - Blur handler

### Header
A responsive header component with navigation menu and user menu.

```javascript
import { Header } from '@indec/react-commons';

<Header
  token={userToken}
  user={{name: 'John', lastName: 'Doe'}}
  items={[
    {name: 'Dashboard', path: 'dashboard'},
    {name: 'Reports', path: 'reports'}
  ]}
  onRedirect={handleNavigation}
  onLogout={handleLogout}
/>
```

### Footer
A fixed footer component that stays at the bottom of the page.

```javascript
import { Footer } from '@indec/react-commons';

<Footer>
  <p>© 2024 INDEC. All rights reserved.</p>
</Footer>
```

### Modal
A flexible modal component with compound components for title, content, and buttons.

```javascript
import { Modal } from '@indec/react-commons';

<Modal show={isOpen} onClose={handleClose}>
  <Modal.Title title="Confirm Action" />
  <Modal.Content>
    <p>Are you sure you want to proceed?</p>
  </Modal.Content>
  <Modal.Buttons onClose={handleClose} />
</Modal>
```

### Table
A data table component with sorting, pagination, and loading states.

```javascript
import { Table } from '@indec/react-commons';

<Table
  columns={[
    {key: 'id', label: 'ID'},
    {key: 'name', label: 'Name'},
    {key: 'email', label: 'Email'}
  ]}
  rows={data}
  page={1}
  totalResults={100}
  resultsPerPage={10}
  onChangePage={handlePageChange}
  onSort={handleSort}
  isLoading={false}
  showPagination={true}
/>
```

### Pagination
A pagination component for navigating through pages of data.

```javascript
import { Pagination } from '@indec/react-commons';

<Pagination
  page={currentPage}
  totalPages={10}
  onPageChange={handlePageChange}
/>
```

### Snackbar
A notification component that displays temporary messages.

```javascript
import { Snackbar } from '@indec/react-commons';

<Snackbar
  open={showMessage}
  message="Operation completed successfully"
  type="success"
  onClose={handleClose}
/>
```

### Loading
A loading spinner component.

```javascript
import { Loading } from '@indec/react-commons';

<Loading />
```

### ErrorMessage
A component to display error messages consistently.

```javascript
import { ErrorMessage } from '@indec/react-commons';

<ErrorMessage error="Something went wrong" />
```

## Icons

The library includes 40+ icon components that can be imported individually:

```javascript
import { 
  AddIcon,
  DeleteIcon,
  EditIcon,
  SearchIcon,
  UserIcon,
  MenuIcon,
  CloseIcon,
  CheckCircleIcon,
  ErrorIcon,
  InfoIcon,
  // ... and many more
} from '@indec/react-commons';

// Usage
<SearchIcon size={24} className="text-blue-600" />
```

All icons support the following props:
- `size` - Icon size (default: 24)
- `className` - CSS classes for styling
- All standard SVG props

### Available Icons:
- Navigation: `ArrowBackIcon`, `ArrowForwardIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `MenuIcon`
- Actions: `AddIcon`, `DeleteIcon`, `EditIcon`, `SaveIcon`, `CloseIcon`, `SearchIcon`
- Status: `CheckCircleIcon`, `ErrorIcon`, `InfoIcon`, `HelpIcon`
- User: `UserIcon`, `AccountCircleIcon`, `GroupIcon`
- Files: `AttachFileIcon`, `UploadFileIcon`
- And many more...

## Hooks

### useScreenSize
A hook that provides responsive screen size information.

```javascript
import { useScreenSize } from '@indec/react-commons';

function MyComponent() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

## Utilities

### getPaginationFields
A utility function to calculate pagination parameters.

```javascript
import { getPaginationFields } from '@indec/react-commons';

const { startIndex, endIndex } = getPaginationFields(currentPage, itemsPerPage, totalItems);
```

## Development

### Prerequisites
- Node.js >= 14
- npm >= 6

### Setup

1. Clone the repository
```bash
git clone https://github.com/indec-it/react-commons.git
cd react-commons
```

2. Install dependencies
```bash
npm install
```

3. Start Storybook
```bash
npm start
```

Storybook will open at [http://localhost:6006](http://localhost:6006)

### Building

Build the library:
```bash
npm run build
```

### Testing

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Project Structure

```
src/
  components/       # React components
    Button.jsx
    Field.jsx
    Header/
    Icons/
    Modal/
    Table/
    ...
  hooks/           # Custom React hooks
    useScreenSize.js
  utils/           # Utility functions
    getPaginationFields.js
  stories/         # Storybook stories
  __tests__/       # Test files
  styles.css       # Global styles
  index.js         # Main export file
```

## Technologies

- **React** - Component library
- **Tailwind CSS** - Styling
- **Storybook** - Component development and documentation
- **Vitest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Write tests for new components
- Update Storybook stories
- Follow the existing code style
- Update documentation as needed

## License

MIT License - see [LICENSE.md](LICENSE.md) for details

## Support

For issues and feature requests, please use the [GitHub issues page](https://github.com/indec-it/react-commons/issues).