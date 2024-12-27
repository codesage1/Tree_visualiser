// TreeVisualiser.jsx
import React, { useState, useEffect } from 'react';
import TreeNode from './TreeNode';
import TreeConnection from './TreeConnection';
import TreeControls from './TreeControls';
import { BinaryTree } from '../../utils/binarytree';

const TreeVisualiser = () => {
    const [tree] = useState(() => new BinaryTree());
    const [nodes, setNodes] = useState([]);

    const updateNodes = () => {
        const coordinates = tree.getTreeCoordinates();
        setNodes(coordinates);
    };

    const handleInsert = (value) => {
        tree.insert(value);
        updateNodes();
    };

    const handleDelete = (value) => {
        tree.deleteNode(value);
        updateNodes();
    };

    const handleClear = () => {
        tree.root = null;
        updateNodes();
    };

    const handleFill = () => {
        handleClear();
        for(let i = 1; i <= 10; i++){
            tree.insert(i);
        }
        updateNodes();
    };

    useEffect(() => {
        // Initialize with some example nodes
        handleInsert(5);
        handleInsert(3);
        handleInsert(7);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <TreeControls
                onInsert={handleInsert}
                onDelete={handleDelete}
                onClear={handleClear}
                onFill={handleFill}
            />
            <div className="relative w-[800px] h-[600px] bg-gray-900 rounded-lg">
                <svg className="w-full h-full">
                    {nodes.map((node, index) => (
                        node.parentX !== null && (
                            <TreeConnection
                                key={`connection-${index}`}
                                startX={node.parentX}
                                startY={node.parentY}
                                endX={node.x}
                                endY={node.y}
                            />
                        )
                    ))}
                </svg>
                {nodes.map((node, index) => (
                    <TreeNode
                        key={`node-${index}`}
                        number={node.data}
                        x={node.x - 30}
                        y={node.y}
                    />
                ))}
            </div>
        </div>
    );
};

export default TreeVisualiser;