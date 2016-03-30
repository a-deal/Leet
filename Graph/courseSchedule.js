var createGraph = function (edgeList) {
    return edgeList.reduce(function(graph, edge){
        var fromVertex = edge[1];
        var toVertex = edge[0];
        graph[fromVertex] = graph[fromVertex] === undefined ? [] : graph[fromVertex]
        graph[toVertex] = graph[toVertex] === undefined ? [] : graph[toVertex]
        graph[fromVertex].push(toVertex)
        return graph;
    }, {})
}

var hasCycle = function (node, graph, stack) {
        var edges = graph[node];
        for (var i = 0; i < edges.length; i++) {
            for (var j = 0; j < stack.length; j++) {
                if (edges[i] === stack[j])  {
                    return true;
                }
            }
        }
    }

var DFS =  function (node, graph, stack) {
        var edges = graph[node];
        if(!edges.length) {
            graph[node] = 'visited';
            return true;
        }
        stack = stack || [];
        if (hasCycle(node, graph, stack)) return false;
        stack.push(node);

        for (var i = 0; i < edges.length; i++) {
            var head = edges[i];
            if (graph[head] !== 'visited') {
                result = DFS(head, graph, stack);
                if (result === false) {
                    return false;
                }
            }
        }
        graph[node] = 'visited'
        stack.pop();
    }

var canFinish = function(numCourses, prerequisites) {
    var edges = prerequisites;
    var graph = createGraph(edges);
    for (var i = 0; i < edges.length; i++) {
        var tail = edges[i][1];
        if (graph[tail] !== 'visited') {
            if (DFS(tail, graph) === false) return false;
        }
    }
    return true;
};
