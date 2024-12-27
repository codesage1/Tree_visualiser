import { useState } from "react"
import TreeNode from "./TreeNode"
const TreeVisualiser = () => {
    const [nodes, setNodes] = useState([
        {id: 1, value: 5, x: 200, y: 50}, // root
        {id: 2, value: 3, x: 100, y: 150}, // left child
        {id: 3, value: 7, x: 300, y: 150}, // right child
    ])

    return(
        <div style = {{position: 'relative', width: '800px', height: '600px'}}>
            {nodes.map(node => (
                <TreeNode 
                    key = {node.id}
                    number = {node.value}
                    x = {node.x}
                    y = {node.y}
                />
            ))}
        </div>
    )
}
export default TreeVisualiser