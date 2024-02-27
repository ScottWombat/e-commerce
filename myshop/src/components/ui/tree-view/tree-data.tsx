const treeData = [
    {
      key: '0',
      label: 'Documents',
      isFolder: true,
      children: [
        {
          key: '0-0',
          label: 'Document 1-1',
          isFolder: true,
          children: [
            {
              key: '0-1-1',
              label: 'Document-0-1.doc',
              isFolder: false,
            },
            {
              key: '0-1-2',
              label: 'Document-0-2.doc',
              isFolder: true,
              children: [
                {
                  key: '0-1-1-1',
                  label: 'Document-0-1.doc',
                  isFolder: false,
                },
                {
                  key: '0-1-1-2',
                  label: 'Document-0-2.doc',
                  isFolder: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: '1',
      label: 'Desktop',
      isFolder: true,
      children: [
        {
          key: '1-0',
          label: 'document1.doc',
          isFolder: false,
        },
        {
          key: '0-0',
          label: 'documennt-2.doc',
          isFolder: false,
        },
      ],
    },
    {
      key: '2',
      label: 'Downloads',
      isFolder: false,
      children: [],
    },
  ];

export default treeData;