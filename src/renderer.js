import Reconciler from 'react-reconciler';
import { backgroundColorAssign } from './helpers';

const hostConfig = {
    now: Date.now,
    supportsMutation: true,

    createInstance: (type, props) => {
        let instance;

        if (type === 'rectangle') {
            instance = figma.createRectangle();
        } else if (type === 'frame') {
            instance = figma.createFrame();
        }

        ['name', 'x', 'y'].forEach(value => {
            if (props[value]) {
                instance[value] = props[value];
            }
        });

        instance.resize(
            props['width'] || instance.width,
            props['height'] || instance.height
        );

        if (props['backgroundColor']) {
            backgroundColorAssign(instance, props['backgroundColor']);
        }

        return instance;
    },

    appendInitialChild: (parentInstance, child) => {
        parentInstance.appendChild(child);
    },
    appendChildToContainer: (container, child) => {
        container.appendChild(child);
    },
    appendChild: (parentInstance, child) => {
        parentInstance.appendChild(child);
    },

    removeChild: (parentInstance, child) => {
        child.remove();
    },
    removeChildFromContainer: (container, child) => {
        child.remove();
    },

    insertBefore: (parentInstance, child, beforeChild) => {
        const index = parentInstance.children.indexOf(beforeChild);
        parentInstance.insertChild(index, child);
    },
    insertInContainerBefore: (container, child, beforeChild) => {
        const index = container.children.indexOf(beforeChild);
        container.insertChild(index, child);
    },

    prepareUpdate: (node, type, oldProps, newProps) => {
        return newProps;
    },
    commitUpdate: (instance, updatePayload, type, oldProps, newProps) => {
        if (updatePayload['backgroundColor']) {
            backgroundColorAssign(instance, updatePayload['backgroundColor']);
        }
    },

    getRootHostContext: rootContainerInstance => null,
    getChildHostContext: (parentHostContext, type, rootContainerInstance) =>
        null,
    prepareForCommit: rootContainerInstance => {},
    resetAfterCommit: rootContainerInstance => {},
    shouldSetTextContent: () => false,
    finalizeInitialChildren: () => false
};

export const render = (jsx, rootNode) => {
    const reconciler = Reconciler(hostConfig);
    const container = reconciler.createContainer(rootNode);
    reconciler.updateContainer(jsx, container);
};
