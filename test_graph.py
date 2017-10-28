import plotly
import plotly.plotly as py
import plotly.graph_objs as go
# Create random data with numpy
import numpy as np

plotly.tools.set_credentials_file(username='jgeati', api_key='qvnmG7BAWkwq1o0PjGen')

N = 100
random_x = np.linspace(0, 24, N)
random_x0 = np.linspace(0, 24, 10)
random_y = np.linspace(80, 180, N)
random_y0 = np.linspace(180, 180, N)
random_y1 = np.random.random_integers(50, 200, 10)
random_y2 = np.linspace(80, 80, N)

# Create traces
trace0 = go.Scatter(
    x=random_x,
    y=random_y0,
    mode='lines',
    name='upper bound'
)
trace1 = go.Scatter(
    x=random_x0,
    y=random_y1,
    mode='lines+markers',
    name='blood glucose data'
)
trace2 = go.Scatter(
    x=random_x,
    y=random_y2,
    mode='lines',
    name='lower bound'
)
data = [trace0, trace1, trace2]

layout = go.Layout(
    showlegend=False,
    annotations=[
        dict(
            x=random_x0[np.argmax(random_y1)],
            y=np.amax(random_y1),
            xref='x',
            yref='y',
            text='Insulin',
            showarrow=True,
            arrowhead=7,
            ax=0,
            ay=-10
        )
    ]
)
fig = go.Figure(data=data, layout=layout)
py.iplot(fig, filename='line-mode')
