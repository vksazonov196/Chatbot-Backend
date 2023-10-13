import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'Message'})
export class MessagesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  sender: string;
}