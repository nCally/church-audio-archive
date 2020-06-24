import React from 'react';
import { FileSearchOutlined } from '@ant-design/icons';

export default function () {
  return (
    <div className="empty">
      <div>
        <FileSearchOutlined />
        <div>No available message</div>
      </div>
    </div>
  )
}