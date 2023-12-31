"""int_data

Revision ID: 49a98b6bfdd0
Revises: 
Create Date: 2023-11-10 23:43:40.728229

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e3e3b99b7b81'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('disl_hackaton',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('WAGNUM', sa.Integer(), nullable=True),
    sa.Column('OPERDATE', sa.Integer(), nullable=True),
    sa.Column('ST_ID_DISL', sa.Integer(), nullable=True),
    sa.Column('ST_ID_DEST', sa.Integer(), nullable=True),
    sa.Column('TRAIN_INDEX', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_disl_hackaton'))
    )
    op.create_table('peregons',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('START_CODE', sa.Integer(), nullable=True),
    sa.Column('END_CODE', sa.Integer(), nullable=True),
    sa.Column('LEN', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_peregons'))
    )
    op.create_table('station_coords',
    sa.Column('ST_ID', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('LATITUDE', sa.Float(), nullable=True),
    sa.Column('LONGITUDE', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('ST_ID', name=op.f('pk_station_coords'))
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('station_coords')
    op.drop_table('peregons')
    op.drop_table('disl_hackaton')
    # ### end Alembic commands ###
