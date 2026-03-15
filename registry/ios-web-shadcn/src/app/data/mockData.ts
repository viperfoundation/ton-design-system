export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: Date;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

export const conversations: Conversation[] = [
  {
    id: "1",
    name: "Alice Chen",
    avatar: "AC",
    lastMessage: "The sensor data looks great!",
    timestamp: "2:34 PM",
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "Bob Smith",
    avatar: "BS",
    lastMessage: "When can we deploy the nodes?",
    timestamp: "1:15 PM",
    unread: 0,
    online: true,
  },
];

export const messagesByConversation: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      text: "Hey! How's the DePIN setup going?",
      senderId: "1",
      timestamp: new Date("2026-03-15T14:20:00"),
      isMe: false,
    },
    {
      id: "2",
      text: "Great! Just deployed 5 new sensors across the network",
      senderId: "me",
      timestamp: new Date("2026-03-15T14:22:00"),
      isMe: true,
    },
    {
      id: "3",
      text: "That's awesome! What's the coverage now?",
      senderId: "1",
      timestamp: new Date("2026-03-15T14:23:00"),
      isMe: false,
    },
    {
      id: "4",
      text: "We're at about 87% coverage in the downtown area. The mesh network is really coming together 📡",
      senderId: "me",
      timestamp: new Date("2026-03-15T14:25:00"),
      isMe: true,
    },
    {
      id: "5",
      text: "The sensor data looks great!",
      senderId: "1",
      timestamp: new Date("2026-03-15T14:34:00"),
      isMe: false,
    },
  ],
  "2": [
    {
      id: "1",
      text: "I've been reviewing the node deployment plan",
      senderId: "2",
      timestamp: new Date("2026-03-15T13:10:00"),
      isMe: false,
    },
    {
      id: "2",
      text: "Looks solid to me. What are your thoughts?",
      senderId: "me",
      timestamp: new Date("2026-03-15T13:12:00"),
      isMe: true,
    },
    {
      id: "3",
      text: "When can we deploy the nodes?",
      senderId: "2",
      timestamp: new Date("2026-03-15T13:15:00"),
      isMe: false,
    },
  ],
};
