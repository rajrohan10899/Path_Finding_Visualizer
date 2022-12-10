const AccordionData = [
  {
    id: 1,
    qn: "BFS (Breadth First Search)",
    ans: " Start by putting any one of the graphs vertices at the back of a queue. \n Take the front item of the queue and add it to the visited list. Create a list of that vertexs adjacent nodes. Add the ones which arent in the visited list to the back of the queue. Keep repeating the steps until the queue is empty.",
  },
  {
    id: 2,
    qn: "DFS (Depth First Search",
    ans: "Start by putting any one of the graph's vertices on top of a stack. Take the top item of the stack and add it to the visited list. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack. Keep repeating steps 2 and 3 until the stack is empty.",
  },
  {
    id: 3,
    qn: "A-Star ",
    ans: "Step1: Place the starting node in the OPEN list. Step 2: Check if the OPEN list is empty or not, if the list is empty then return failure and stops. Step 3: Select the node from the OPEN list which has the smallest value of evaluation function (g+h), if node n is goal node then return success and stop, otherwise Step 4: Expand node n and generate all of its successors, and put n into the closed list. For each successor n', check whether n' is already in the OPEN or CLOSED list, if not then compute evaluation function for n' and place into Open list. Step 5: Else if node n' is already in OPEN and CLOSED, then it should be attached to the back pointer which reflects the lowest g(n') value. Step 6: Return to Step 2.",
  },
  {
    id: 4,
    qn: "Dijkstra",
    ans: "Step1: All nodes should be marked as unvisited. Step2: All the nodes must be initialized with the infinite (a big number) distance. The starting node must be initialized with zero. Step3: Mark starting node as the current node. Step4: From the current node, analyze all of its neighbors that are not visited yet, and compute their distances by adding the weight of the edge, which establishes the connection between the current node and neighbor node to the current distance of the current node. Step5: Now, compare the recently computed distance with the distance allotted to the neighboring node, and treat it as the current distance of the neighboring node, Step6: After that, the surrounding neighbors of the current node, which has not been visited, are considered, and the current nodes are marked as visited. Step7: When the ending node is marked as visited, then the algorithm has done its job; otherwise, Step8: Pick the unvisited node which has been allotted the minimum distance and treat it as the new current node. After that, start again from step4.",
  },
];

export default AccordionData;
