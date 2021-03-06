import { IForm } from '@/components/base-ui/form';

export const searchConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称',
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍',
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange',
      },
    },
  ],
};

export const contentConfig = {
  title: '角色列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt',
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt',
    },
    { label: '操作', minWidth: '120', slotName: 'handler' },
  ],
  newBtnName: '新建角色',
  showIndexColumn: true,
  showSelectColumn: true,
};

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名',
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍',
    },
  ],
  colLayout: { span: 24 },
  itemStyle: {},
};
