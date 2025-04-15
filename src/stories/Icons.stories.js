import * as Icons from '../components/Icons';
import '../components/output.css';

export default {
  title: 'Icons',
  component: Icons.AddIcon,
  argTypes: {
    size: {control: {type: 'number', min: 16, max: 64, step: 8}},
    className: {control: 'text'}
  },
  args: {
    size: 24,
    className: 'text-gray-700'
  }
};

export const AccessTimeIcon = {
  render: args => Icons.AccessTimeIcon(args)
};

export const WithCustomStyle = {
  args: {
    className: 'text-red-500',
    size: 30
  }
};

export const AccountCircleIcon = {
  render: args => Icons.AccountCircleIcon(args)
};

export const AccountTreeIcon = {
  render: args => Icons.AccountTreeIcon(args)
};

export const AddIcon = {};

export const ArrowBackIcon = {
  render: args => Icons.ArrowBackIcon(args)
};

export const ArrowDownwardIcon = {
  render: args => Icons.ArrowDownwardIcon(args)
};

export const ArrowForwardIcon = {
  render: args => Icons.ArrowForwardIcon(args)
};

export const ArrowRightIcon = {
  render: args => Icons.ArrowRightIcon(args)
};

export const ArrowUpwardIcon = {
  render: args => Icons.ArrowUpwardIcon(args)
};

export const AttachFileIcon = {
  render: args => Icons.AttachFileIcon(args)
};

export const CheckCircleIcon = {
  render: args => Icons.CheckCircleIcon(args)
};

export const ChevronDownIcon = {
  render: args => Icons.ChevronDownIcon(args)
};

export const ChevronLeftIcon = {
  render: args => Icons.ChevronLeftIcon(args)
};

export const ChevronRightIcon = {
  render: args => Icons.ChevronRightIcon(args)
};

export const CloseIcon = {
  render: args => Icons.CloseIcon(args)
};

export const DeleteIcon = {
  render: args => Icons.DeleteIcon(args)
};

export const EditIcon = {
  render: args => Icons.EditIcon(args)
};

export const EngineeringIcon = {
  render: args => Icons.EngineeringIcon(args)
};

export const ErrorIcon = {
  render: args => Icons.ErrorIcon(args)
};

export const FilterListIcon = {
  render: args => Icons.FilterListIcon(args)
};

export const GroupIcon = {
  render: args => Icons.GroupIcon(args)
};

export const HelpIcon = {
  render: args => Icons.HelpIcon(args)
};

export const HistoryIcon = {
  render: args => Icons.HistoryIcon(args)
};

export const LaptopMacIcon = {
  render: args => Icons.LaptopMacIcon(args)
};

export const ListIcon = {
  render: args => Icons.ListIcon(args)
};

export const MapIcon = {
  render: args => Icons.MapIcon(args)
};

export const MoreVertIcon = {
  render: args => Icons.MoreVertIcon(args)
};

export const PermContactCalendarIcon = {
  render: args => Icons.PermContactCalendarIcon(args)
};

export const PhoneAndroidIcon = {
  render: args => Icons.PhoneAndroidIcon(args)
};

export const SaveIcon = {
  render: args => Icons.SaveIcon(args)
};

export const SearchIcon = {
  render: args => Icons.SearchIcon(args)
};

export const SettingsIcon = {
  render: args => Icons.SettingsIcon(args)
};

export const SortIcon = {
  render: args => Icons.SortIcon(args)
};

export const UploadFileIcon = {
  render: args => Icons.UploadFileIcon(args)
};

export const ViewModuleIcon = {
  render: args => Icons.ViewModuleIcon(args)
};
