class CreateMeetings < ActiveRecord::Migration[6.1]
  def change
    create_table :meetings do |t|
      t.integer :user_id
      t.integer :employee_id
      t.string :title
      t.boolean :completed
      t.datetime :scheduled_date

      t.timestamps
    end
  end
end
