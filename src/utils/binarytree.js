class TreeNode{

    constructor(data, left, right){
        this.data = data;
        this.left = left || null;
        this.right = right || null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    // level order insertion
    insert(data){
        const newNode = new TreeNode(data);

        if(!this.root){
            this.root = newNode;
            return;
        }
        const queue = [this.root];
        while(queue.length > 0){
            const current = queue.shift();
            if(!current.left){
                current.left = newNode;
                return;
            }else{
                queue.push(current.left);
            }
            if(!current.right){
                current.right = newNode;
                return;
            }else{
                queue.push(current.right);
            }
        }
    }
    deleteNode(data){
        let nodeToDelete = null;
        let lastNode = null;
        let parentNodeLast = null;

        if(!this.root) return;
        const queue  = [this.root];

        while(queue.length > 0){
            const currentNode = queue.shift();

            if(currentNode.data === data){
                nodeToDelete = currentNode;
            }

            if(currentNode.left){
                queue.push(currentNode.left);
                parentNodeLast = currentNode;
                lastNode = currentNode.left;
            }
            if(currentNode.right){
                queue.push(currentNode.right);
                parentNodeLast = currentNode;
                lastNode = currentNode.right;
            }
        }

        if(nodeToDelete){
            nodeToDelete.data = lastNode.data;
            if(parentNodeLast.right === lastNode){
                parentNodeLast.right = null;
            } else{
                parentNodeLast.left = null;
            }
        }
    }
    search(data){
        if(!this.root) return false;

        const queue = [this.root];
        while(queue.length > 0){
            const current = queue.shift();
            if(current.data === data) return true;
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return false;
    }
    getLevelOrderAray(){
        if(!this.root) return[];

        const result = [];
        const queue = [this.root];
        while(queue.length>0){
            const current = queue.shift();
            result.push(current.data);

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
    
        }
        return result;
    }
    getTreeCoordinates() {
        if (!this.root) return [];

        const nodePositions = [];
        const levelWidth = 80;  // Horizontal spacing between nodes
        const levelHeight = 100; // Vertical spacing between levels

        function calculatePositions(node, level, position, width) {
            if (!node) return;

            // Calculate x and y coordinates
            const x = position;
            let y = level * levelHeight + 50;

            // Store node data and its coordinates
            nodePositions.push({
                data: node.data,
                x,
                y,
                parentX: level === 0 ? null : position,
                parentY: level === 0 ? null : (level - 1) * levelHeight
            });

            // Calculate positions for children
            const nextWidth = width / 2;
            calculatePositions(node.left, level + 1, position - nextWidth, nextWidth);
            calculatePositions(node.right, level + 1, position + nextWidth, nextWidth);
        }

        calculatePositions(this.root,0, 400, levelWidth * 4); // Start at x=400 for center positioning
        return nodePositions;
    }
}

export {BinaryTree, TreeNode};